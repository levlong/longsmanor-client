export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center py-10">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Hi, bạn nhỏ
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Chào mừng bạn đến với nơi tuyệt vời này.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-600">Pr#</h3>
          <p className="text-sm text-gray-500 mt-2">
            #918723613
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-600">Pr#</h3>
          <p className="text-sm text-gray-500 mt-2">
            #203478234
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-600">Pr#</h3>
          <p className="text-sm text-gray-500 mt-2">
            #9347823
          </p>
        </div>
      </div>
    </div>
  );
}
