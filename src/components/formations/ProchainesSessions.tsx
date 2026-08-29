const sessions = [
  { formation: "À confirmer", date: "À confirmer", lieu: "N'Djaména" },
  { formation: "À confirmer", date: "À confirmer", lieu: "N'Djaména" },
  { formation: "À confirmer", date: "À confirmer", lieu: "N'Djaména" },
];

export function ProchainesSessions() {
  return (
    <section className="cfige-section bg-white" aria-labelledby="sessions-title">
      <div className="cfige-container">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            Calendrier
          </p>
          <h2
            id="sessions-title"
            className="mt-3 text-[30px] font-bold leading-[38px] text-gray-900 md:text-[40px] md:leading-[48px]"
          >
            Prochaines sessions
          </h2>
          <p className="mt-3 text-base leading-6 text-gray-600">
            Les dates des prochaines sessions seront bientôt annoncées.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs font-bold uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-6 py-4">Formation</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Lieu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sessions.map((s, i) => (
                <tr key={i} className="text-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {s.formation}
                  </td>
                  <td className="px-6 py-4">{s.date}</td>
                  <td className="px-6 py-4">{s.lieu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
