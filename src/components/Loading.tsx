import { CircleLoader } from "react-spinners";

function Loading() {
  return (
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: "35%",
        zIndex: 10,
      }}
    >
      <CircleLoader color="#36d7b7" size={150} />
    </div>
  );
}

export default Loading;
