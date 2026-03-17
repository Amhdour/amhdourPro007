type MatrixRow = {
  riskArea: string;
  exampleThreat: string;
  control: string;
  evidence: string;
};

type ControlsMatrixProps = {
  rows: readonly MatrixRow[];
};

export default function ControlsMatrix({ rows }: ControlsMatrixProps) {
  return (
    <section
      className="print-section rounded-lg border border-site-primary/20 p-6 bg-site-block"
      aria-labelledby="controls-matrix-title"
    >
      <h2 id="controls-matrix-title" className="text-2xl font-bold mb-4">
        Controls Matrix
      </h2>

      <div className="controls-matrix-table hidden md:block overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-site-primary/20 text-left">
              <th scope="col" className="py-3 pr-4">Risk Area</th>
              <th scope="col" className="py-3 pr-4">Example Threat</th>
              <th scope="col" className="py-3 pr-4">Control in rag-security-platform</th>
              <th scope="col" className="py-3">Evidence</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.riskArea} className="border-b border-site-primary/10 align-top">
                <td className="py-3 pr-4 font-semibold">{row.riskArea}</td>
                <td className="py-3 pr-4 text-site-muted">{row.exampleThreat}</td>
                <td className="py-3 pr-4 text-site-muted">{row.control}</td>
                <td className="py-3 text-site-muted">{row.evidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="controls-matrix-cards grid gap-3 md:hidden" aria-label="Controls matrix cards">
        {rows.map((row) => (
          <article key={row.riskArea} className="rounded-md border border-site-primary/20 p-4 bg-site-bg/40">
            <h3 className="font-semibold text-site-text">{row.riskArea}</h3>
            <dl className="mt-3 grid gap-2 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-site-primary font-semibold">Example Threat</dt>
                <dd className="text-site-muted mt-1">{row.exampleThreat}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-site-primary font-semibold">Control in rag-security-platform</dt>
                <dd className="text-site-muted mt-1">{row.control}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-site-primary font-semibold">Evidence</dt>
                <dd className="text-site-muted mt-1">{row.evidence}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
