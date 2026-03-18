# Trust Boundaries

Key trust boundaries identified during the Onyx-based analysis:

- user input to orchestration runtime
- external connectors into retrieval pipelines
- retrieval output into prompt/context assembly
- model output into tool invocation paths
- tenant/session context into shared telemetry and storage systems

The boundary map is used to determine where filtering, isolation, authorization, and audit hooks must be enforced.
