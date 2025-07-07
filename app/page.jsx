
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <img
          src="/avatar.jpg"
          alt="Avatar"
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow"
        />
        <h1 className="text-2xl font-bold mt-4">Bùi Đình Nam Khánh</h1>
        <p className="text-gray-700 mt-2">Tôi là sinh viên chuyên ngành thiết kế đồ họa học tại trường FPT Polyschool</p>
        <div className="mt-4 flex justify-center gap-4 text-blue-600 text-sm font-medium">
          <a href="https://www.facebook.com/namkhanh13208" target="_blank">Facebook</a>
          <a href="https://www.instagram.com/nkaaaaa28/" target="_blank">Instagram</a>
          <a href="mailto:nkhanh1308208@gmail.com">Email</a>
          <a href="tel:0828028966">Gọi</a>
        </div>
      </div>
    </main>
  );
}
