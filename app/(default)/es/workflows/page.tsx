export const metadata = {
  title: "Proceso de desarrollo de software | Nerai Labs GitHub Pages",
  description: "Conocé cómo entregamos software: alcance escrito la primera semana, demos cada dos semanas y un tablero para medir el resultado.",
  alternates: {
    languages: {
      en: "https://nerai-labs.github.io/workflows/",
      es: "https://nerai-labs.github.io/es/workflows/",
    },
  },
};

export default function WorkflowsEs() {
  return (
    <section lang="es">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center">
            <h1 className="font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl">
              Cómo entregamos software
            </h1>
            <p className="mt-4 text-lg text-indigo-200/65">
              Cada proyecto sigue los mismos tres pasos, así siempre sabés qué viene y cuándo lo vas a ver funcionando.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            <article>
              <img src="/images/workflow-01.png" width="350" height="288" />
              <h2 className="mt-4 font-nacelle text-xl font-semibold text-gray-200">Planificar la entrega</h2>
              <p className="mt-2 text-indigo-200/65">
                Empezamos con una llamada de una hora para acordar el problema, quién va a usar el producto y la fecha en
                que tiene que estar en línea. El alcance escrito llega esa misma semana.
              </p>
            </article>
            <article>
              <img src="/images/workflow-02.png" width="350" height="288" />
              <h2 className="mt-4 font-nacelle text-xl font-semibold text-gray-200">Construir en ciclos cortos</h2>
              <p className="mt-2 text-indigo-200/65">
                Cada dos semanas hay trabajo nuevo en un enlace de vista previa. Cada ciclo termina con una demo y una
                lista corta de lo que cambió, para que los comentarios lleguen cuando todavía es barato atenderlos.
              </p>
            </article>
            <article>
              <img src="/images/workflow-03.png" width="350" height="288" />
              <h2 className="mt-4 font-nacelle text-xl font-semibold text-gray-200">Entregar y medir</h2>
              <p className="mt-2 text-indigo-200/65">
                Publicamos detrás de un flag, miramos errores y uso los primeros días y entregamos un tablero con los
                números que dicen si la entrega cumplió su objetivo.
              </p>
              <h2 className="mt-4 font-nacelle text-xl font-semibold text-gray-200">Con quién vas a trabajar</h2>
              <p className="mt-2 text-indigo-200/65">La planificación, los ciclos de construcción y la medición tienen responsables concretos. Estas son las personas que intervienen en cada etapa y lo que vas a recibir de su trabajo.</p>
              <h3>MaKayla P., responsable de producto</h3>
              <p className="mt-2 text-indigo-200/65">MaKayla conduce la llamada de planificación y escribe el alcance. En esa primera conversación de una hora acordamos el problema, quién va a usar el producto y la fecha en que tiene que estar en línea. El alcance escrito llega esa misma semana.</p>
              <h3>Andrew K., responsable de ingeniería</h3>
              <p className="mt-2 text-indigo-200/65">Andrew publica el trabajo de cada ciclo en tu enlace de vista previa. Cada dos semanas podés ver lo nuevo funcionando; el ciclo termina con una demo y una lista corta de cambios para que puedas dar tus comentarios.</p>
              <h3>Lucy D., analista de datos</h3>
              <p className="mt-2 text-indigo-200/65">Lucy construye el tablero que recibís después de la publicación. Ese tablero reúne los números que permiten ver si la entrega cumplió su objetivo, junto con el seguimiento de errores y uso de los primeros días.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
