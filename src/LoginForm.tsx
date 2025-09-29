

export const LoginForm = () => {
    return (
        <>
        <form action="">

        <h3>Login</h3>
        <div className="form_group">
        <label htmlFor="e-mail">E-mail</label>
        <input type="email" placeholder="Enter your e-mail" name="email" id="email" />
            </div>
            
            <div className="form_group">
            <label htmlFor="login">Login</label>
        <input type="text" placeholder="Enter your Login" name="login" id="login" />
            </div>
            
            <div className="form_group">

           
        <label htmlFor="login">Password</label>

        <input type="password" name="password" id="password" />
 </div>
        </form>
        </>
    )

}