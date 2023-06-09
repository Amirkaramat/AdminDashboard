import React, { useContext, useEffect, useState } from "react";
import "./SideBar.css";
import {ToggleContext}  from "../../Context/Toggle";
import {
  LineStyleIcon,
  TimelineIcon,
  TrendingUpIcon,
  PermIdentityIcon,
  StorefrontIcon,
  AttachMoneyIcon,
  BarChartIcon,
  MailOutlineIcon,
  DynamicFeedIcon,
  ChatBubbleOutlineIcon,
  MessageOutlinedIcon,
  WorkOutlineIcon,
  ReportIcon,
  MenuIcon,
} from "../../icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  // const contextToggle = useContext(ToggleContext);
  const {toggle, setToggle} = useContext(ToggleContext);

  return (
     
      <div
        className={`side-bar overflow-y-auto bg-gray-100 fixed lg:sticky top-[50px] transition-all  z-10 flex-1 md:h-screen
        ${toggle ? "left-0" : "-left-[200px]"}`}>
        <div className={`sideBar-wrapper p-[20px] text-[#555]`}>
          <div className='sideBar-menu mb-[10px] '>
            <h3 className='sideBar-title text-[13px] text-slate-400'>
              Dashboard
            </h3>

            <ul className='sideBar-List p-[5px]'>
              <Link to='/'>
                <li className='sideBar-listItem  px-[10px] py-[5px] cursor-pointer flex items-center rounded-[10px]  active'>
                  <LineStyleIcon className='text-[20px] mr-[5px]' />
                  Home
                </li>
              </Link>

              <li className='sideBar-listItem px-[10px] py-[5px] cursor-pointer flex items-center rounded-[10px]'>
                <TimelineIcon className='text-[20px] mr-[5px]' />
                Analytics
              </li>

              <li className='sideBar-listItem px-[10px] py-[5px] cursor-pointer flex items-center rounded-[10px]'>
                <TrendingUpIcon className='text-[20px] mr-[5px]' />
                Sales
              </li>
            </ul>
          </div>

          <div className='sideBar-menu mb-[10px]'>
            <h3 className='sideBar-title text-[13px] text-slate-400'>
              Quick Menu
            </h3>
            <ul className='sideBar-List p-[5px]'>
              <Link to='/users'>
                <li className='sideBar-listItem  px-[10px] py-[5px] cursor-pointer flex items-center rounded-[10px]'>
                  <PermIdentityIcon className='text-[20px] mr-[5px]' />
                  Users
                </li>
              </Link>

              <Link to='/newUser'>
                <li className='sideBar-listItem px-[10px] py-[5px] cursor-pointer flex items-center rounded-[10px]'>
                  <StorefrontIcon className='text-[20px] mr-[5px]' />
                  New User
                </li>
              </Link>

              <Link to='/products'>
                <li className='sideBar-listItem px-[10px] py-[5px] cursor-pointer flex items-center rounded-[10px]'>
                  <AttachMoneyIcon className='text-[20px] mr-[5px]' />
                  Products
                </li>
              </Link>

              <Link to='/newProduct'>
                <li className='sideBar-listItem px-[10px] py-[5px] cursor-pointer flex items-center rounded-[10px]'>
                  <AttachMoneyIcon className='text-[20px] mr-[5px]' />
                  NewProduct
                </li>
              </Link>

              <li className='sideBar-listItem px-[10px] py-[5px] cursor-pointer flex items-center rounded-[10px]'>
                <BarChartIcon className='text-[20px] mr-[5px]' />
                TransActions
              </li>

              <li className='sideBar-listItem px-[10px] py-[5px] cursor-pointer flex items-center rounded-[10px]'>
                <MailOutlineIcon className='text-[20px] mr-[5px]' />
                Reports
              </li>
            </ul>
          </div>

          <div className='sideBar-menu mb-[10px]'>
            <h3 className='sideBar-title text-[13px] text-slate-400'>
              Notifications
            </h3>

            <ul className='sideBar-List p-[5px]'>
              <li className='sideBar-listItem  px-[10px] py-[5px] cursor-pointer flex items-center rounded-[10px] '>
                <DynamicFeedIcon className='text-[20px] mr-[5px]' />
                Mail
              </li>

              <li className='sideBar-listItem px-[10px] py-[5px] cursor-pointer flex items-center rounded-[10px]'>
                <ChatBubbleOutlineIcon className='text-[20px] mr-[5px]' />
                FeedBack
              </li>

              <li className='sideBar-listItem px-[10px] py-[5px] cursor-pointer flex items-center rounded-[10px]'>
                <MessageOutlinedIcon className='text-[20px] mr-[5px]' />
                Messages
              </li>
            </ul>
          </div>

          <div className='sideBar-menu mb-[10px]'>
            <h3 className='sideBar-title text-[13px] text-slate-400'>Staff</h3>

            <ul className='sideBar-List p-[5px]'>
              <li className='sideBar-listItem  px-[10px] py-[5px] cursor-pointer flex items-center rounded-[10px] '>
                <WorkOutlineIcon className='text-[20px] mr-[5px]' />
                Manage
              </li>

              <li className='sideBar-listItem px-[10px] py-[5px] cursor-pointer flex items-center rounded-[10px]'>
                <TimelineIcon className='text-[20px] mr-[5px]' />
                Analytics
              </li>

              <li className='sideBar-listItem px-[10px] py-[5px] cursor-pointer flex items-center rounded-[10px]'>
                <ReportIcon className='text-[20px] mr-[5px]' />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default SideBar;
