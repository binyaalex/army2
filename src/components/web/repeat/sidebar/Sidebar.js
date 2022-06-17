import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div
      className={
        props.openSideBar
          ? "customizer border-left-blue-grey border-left-lighten-4 open"
          : "customizer border-left-blue-grey border-left-lighten-4 d-none d-md-block"
      }
    >
      <div className="customizer-content pt-2">{props.sidebarComponent}</div>
    </div>
  );
};
export default Sidebar;
