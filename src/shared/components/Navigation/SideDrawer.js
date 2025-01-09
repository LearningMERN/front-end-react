import React from "react";
import ReactDOM from "react-dom";
import './SideDrawer.css';
import {CSSTransition} from 'react-transition-group';
//npm install --save react-transition-group to install library for animation


const SideDrawer = props => {

    //aside onClick receives closeDrawer function from MainNavigation
    //when anywhere in aside is clicked, drawer will close
  const content = (
      <CSSTransition in={props.show} //visible when props.show = true
                     timeout={200} //duration of animation in milisec
                     classNames="slide-in-left" //css animation frmo index.css
                     mountOnEnter //adds aside to DOM
                     unmountOnExit //removes from DOM
      >
        <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
      </CSSTransition>
  );

  //Portal used to render content in another part of index.html instead of the root as usual
  //Must add new div to index.html to asign render to

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"))
};

export default SideDrawer;