import { screen } from "../../test"
import { renderTheme } from "src/test/renderTheme";
import Header from ".";


describe("AsideMenu", () => {
    it('should be render Header', () => {
        renderTheme(<Header />)

        expect(screen.getByRole('img')).toBeInTheDocument();
        
        const links = screen.getAllByRole('link')
        links.forEach(link => expect(link).toBeInTheDocument())

        expect(links.length).toBe(3);

        expect(screen.getByRole('button')).toBeInTheDocument();
    })

    it('should be render Header with AsideMenu open', () => {
        renderTheme(<Header />)

        const hamburger = screen.getByRole('button')
        expect(hamburger).toBeInTheDocument();

        const links = screen.getAllByRole('link')
        links.forEach(link => expect(link).toBeInTheDocument())

        expect(links.length).toBe(3);

        expect(screen.getByRole('button')).toBeInTheDocument();

        hamburger.click()

        expect(screen.getByRole('aside')).toBeInTheDocument();
    })
});