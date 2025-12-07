import { useNavigate } from "react-router";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "2rem",
      }}
    >
      <h1>Home Page</h1>
      <button
        onClick={() => navigate("/3d")}
        style={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        View 3D Scene
      </button>
    </div>
  );
};
