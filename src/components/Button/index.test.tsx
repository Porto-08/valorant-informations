import { screen, fireEvent } from "../../test"
import { renderTheme } from "src/test/renderTheme";
import Button from "./index";


const mock = {
    title: "Button",
    background: "red",
    hoverBackground: "blue",
    fontSize: "20px",
    padding: "10px",
    onClick: jest.fn()
}


describe("AsideMenu", () => {
    it('should be render Button', () => {
        renderTheme(<Button {...mock}>Butao</Button>)

        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()

        const text = screen.getByText('Butao')
        expect(text).toBeInTheDocument()

        expect(button).toHaveStyle({
            background: mock.background,
            fontSize: mock.fontSize,
            padding: mock.padding
        });
    })

    it('should be call OnClick function', () => {
        renderTheme(<Button {...mock}>Butao</Button>)

        const button = screen.getByRole('button')

        fireEvent.click(button)

        expect(mock.onClick).toHaveBeenCalledTimes(1)
    })

    it('should be render Button with hoverBackground', () => {
        renderTheme(<Button {...mock}>Butao</Button>)

        const button = screen.getByRole('button');
        fireEvent.mouseOver(button);

        
    })
});