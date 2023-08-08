import React, {useContext} from "react";

const themeContext = React.createContext('light')
const Theme = () => {
	return (
    <div className="component">
      <themeContext.Provider value="dark">
        <Toolbar />
      </themeContext.Provider>
    </div>
  );
}
	function Toolbar() {
		const theme = useContext(themeContext)
		return (
      <div className="toolbar">
        <button
          style={{ background: theme, marginTop: "2rem", marginLeft: "4rem" }}
        className="btn btn-success">
          Click Me
        </button>
      </div>
    );
}
export default Theme;