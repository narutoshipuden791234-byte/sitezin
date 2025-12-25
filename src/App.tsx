import { Gift, TrendingUp, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-green-600 rounded-full mb-6">
            <Gift className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Surpresa de Natal 2025
          </h1>
          <p className="text-xl text-gray-600">
            Ganhe até <span className="font-bold text-green-600">R$170</span> no Pix
          </p>
        </header>

        <main>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Promoção Especial TikTok Lite
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Sem Investimento</h3>
                <p className="text-gray-600 text-sm">
                  Participe sem gastar nada
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Direto no Pix</h3>
                <p className="text-gray-600 text-sm">
                  Receba o bônus instantaneamente
                </p>
              </div>

              <div className="text-center p-6 bg-yellow-50 rounded-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
                  <Gift className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Sem Sorteio</h3>
                <p className="text-gray-600 text-sm">
                  Todos podem ganhar
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-green-600 text-white rounded-xl p-6 text-center">
              <p className="text-lg mb-4">
                Resgate sua surpresa agora e celebre o Natal com um presente especial!
              </p>
              <button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200">
                Resgatar Bônus
              </button>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>Promoção válida para o período de Natal 2025</p>
            <p className="mt-2">* Sujeito aos termos e condições</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
