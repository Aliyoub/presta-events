import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          width: "100%",
          color: "#FFFFFF",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0491FE",
          marginTop: 20
        }}
        className="py-8"
      >
        <div>
          {/* <div className="container flex gap-10"> */}
          <span>© 2024 Copyright Presta Events</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
