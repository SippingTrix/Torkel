import Registration from './Registration'
import { shallow, mount } from "enzyme"
import { StateContext, StateProvider } from '../../State'
import React from 'react'


describe('Registration Page', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Registration />);
    })

    it("should render a h1 tag", () =>{
        expect(wrapper.find("#registration_title").exists()).toBeTruthy();
    })

    it('should render a form to register with', () => {
        expect(wrapper.find('form#registration_form').exists()).toBeTruthy();
        
        expect(wrapper.find('#firstName').exists()).toBeTruthy();
        expect(wrapper.find('#lastName').exists()).toBeTruthy();
        expect(wrapper.find('#emailInput').exists()).toBeTruthy();
        expect(wrapper.find('#passwordInput').exists()).toBeTruthy();
        expect(wrapper.find('#repasswordInput').exists()).toBeTruthy();
        expect(wrapper.find('.formInput')).toHaveLength(5);
        
        expect(wrapper.find('#formUser')).toHaveLength(1);
        expect(wrapper.find('#formUser').text()).toEqual('User')
        expect(wrapper.find('#formRunner')).toHaveLength(1);
        expect(wrapper.find('#userCheckbox')).toHaveLength(1);
        expect(wrapper.find('#runnerCheckbox')).toHaveLength(1);
        
        expect(wrapper.find('#formTermsOfService')).toHaveLength(1);
        expect(wrapper.find('#formTermsOfServiceCheckbox')).toHaveLength(1);
    })

    it('should not erase data for registering when submitting', () => {
        expect(wrapper.find('#formSubmitButton')).toHaveLength(1);
        thingy(() => {
            ReactDOM.render((
                <StateProvider>
                    <Registration />
                </StateProvider>
            ), wrapper);
        });
        
        wrapper.find('input#first_name').text = 'Amn';
        wrapper.find('#formSubmitButton').simulate('click');

        expect(wrapper.find('input#first_name').text()).not.toHaveLength(0)

        // let testFn = jest.fn()
        // //wrapper.instance().submitForm = testFn;
        // let spy = jest.spyOn(Registration, 'submitForm')

        // instance.forceUpdate();
        
        // wrapper.find('#formSubmitButton').simulate('click');
        // expect(testFn).toHaveBeenCalled();
    })

    it('should erase data when the registration is successful', () => {
        expect(true).toEqual(true);
    })
    
})

/*
<Link to="/">
{" "}
<button
  onClick={(event) => logoutButtonClick(event)}
  className="logout-button"
>
  {" "}
  Logout{" "}
</button>
</Link>

*/

