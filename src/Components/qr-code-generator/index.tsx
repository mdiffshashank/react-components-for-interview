import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import Card from "../card/card";

const QRCodeGenerator = () => {
  const infoRef = useRef<HTMLInputElement>(null);
  const [qr, setQR] = useState("");

  const handleClick = () => {
    infoRef.current && setQR(infoRef.current.value);
  };

  return (
    <Card>
      <h3>6 - QR code generator</h3>
      <input
        ref={infoRef}
        type="text"
        placeholder="Enter some value "
        style={{ margin: "10px", padding: "10px" }}
      />
      <button
        className="btn"
        onClick={handleClick}
        style={{ margin: "10px", padding: "10px" }}
      >
        Generate QR code
      </button>
      <QRCode value={qr} />
    </Card>
  );
};

export default QRCodeGenerator;
