export const validateEmail = (email) => {
    let error = {}
    if (email === '') {
        error.email = 'You will need your email to log into the portal.'
    } else (!email.includes('@')) {}
}

export const validatePhoneNumber = (phonenumber) => {
    let error = {}
    if (phonenumber === '') {
        error.phoneNumber = 'Your Phone Number is required to recover your password.'
    } else (!phonenumber.typeof()){}
}