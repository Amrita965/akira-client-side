import Login from "./Login/Login";

const Drawer = () => {
  return (
    <div className="drawer drawer-end relative z-[50000]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-base-200 text-base-content min-h-full w-[400px] p-8 relative">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
