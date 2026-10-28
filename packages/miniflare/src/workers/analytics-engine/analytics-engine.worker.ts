import type AnalyticsEngineClient from "./remote.worker";

interface Env {
	dataset: string;
	// Only set when the binding is configured to write to the remote dataset
	remote?: Service<AnalyticsEngineClient>;
}
class LocalAnalyticsEngineDataset implements AnalyticsEngineDataset {
	constructor(private env: Env) {}
	writeDataPoint(event?: AnalyticsEngineDataPoint): void {
		// `writeDataPoint()` is synchronous, so we can't wait for the remote write.
		// The remote client accepts the call straight away and keeps the write
		// alive itself (see `remote.worker.ts`). Locally this is a no-op.
		void this.env.remote?.writeDataPoint(event);
	}
}

export default function (env: Env) {
	return new LocalAnalyticsEngineDataset(env);
}
