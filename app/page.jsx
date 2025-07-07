export default function Home() {
  return (
    <div style={{
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>
      <h1>Xin chào, mình là Bùi Đình Nam Khánh 👋</h1>
      <p>Sinh viên Thiết kế đồ họa tại FPT Polytechnic</p>
      <p>
        <a href="https://facebook.com/namkhanh13208" target="_blank">Facebook</a> |{" "}
        <a href="https://instagram.com/nkaaaaa28" target="_blank">Instagram</a>
      </p>
      <img src="/avatar.jpg" alt="Ảnh của mình" style={{
        marginTop: "1rem",
        borderRadius: "10px",
        width: "200px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
      }} />
      <p style={{ marginTop: "1rem" }}>
        📞 0828028966 – ✉️ nkhanh1308208@gmail.com
      </p>
    </div>
  );
}
