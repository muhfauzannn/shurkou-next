import Button from "./button";

const BurgerAction = () => {
    return(
        <div id='Navbar' className='absolute flex flex-col gap-16 bg-tertiary top-0 right-0 px-20 py-24 rounded-bl-3xl translate-x-full'>
            <div className='font-nunito flex flex-col gap-6 md:hidden'>
                <a href='/'>Home</a>
                <a href='#pricing'>Pricing</a>
                <a href='#features'>Features</a>
                <a href='https://google.com'>Join Discord</a>
            </div>

            <div className='flex flex-col gap-6 font-nunito md:hidden'>
                <Button 
                title= "Sign Up"
                redirectTo = "/signup"
                isPrimary = {false}
                />
                <Button 
                title= "Sign In"
                redirectTo = "/login"
                isPrimary = {true}
                />
            </div>
        </div>
    )
}

export default BurgerAction;