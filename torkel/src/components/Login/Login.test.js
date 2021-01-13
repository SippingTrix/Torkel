import Login from './Login';
import { shallow } from "enzyme";
import React from "react";


describe("Login Screen",  () =>{
    it("should render an h1 tag", () =>{
        const wrapper = shallow(<Login />);
        expect(wrapper.find(".login-header").exists()).toBeTruthy();
    })

    it("consist of a username and password field", () =>{
        const wrapper = shallow(<Login />);
        const requireEmail = wrapper.find("input.email").exists()
        const requirePassword = wrapper.find("input.password").exists()
        expect(requireEmail).toBeTruthy()
        expect(requirePassword).toBeTruthy()
    })

    it("should render login button", () => {
        const wrapper = shallow(<Login />);
        expect(typeof wrapper.find(".login-button").getElement().props.children).toBe("string");
        expect(wrapper.find(".login-button").getElement().props.children).toEqual("Login");
      });

    it("should have a register for account option", () => {
        const wrapper = shallow(<Login />)
        const divRegister = wrapper.find(".register")
        expect(divRegister.exists()).toBeTruthy()
        expect(divRegister.text()).toEqual("Register for an account")
    });

    it("should have a forgot password feature", () => {
        const wrapper = shallow(<Login />)
        const divForgotPassword = wrapper.find(".forgot-password")
        expect(divForgotPassword.exists()).toBeTruthy()
        expect(divForgotPassword.text()).toEqual("Forgot Password")
    })

      
    
    //   it("Login button should call mock function when clicked", () => {
    //     const testClick = jest.fn();
    //     const wrapper = shallow(<LoginScreen loginButtonClick={testClick} />);
    //     const loginButton = wrapper.find("button").simulate("click");
    //     expect(testClick).toHaveBeenCalled();
    //   });
        
    })

    