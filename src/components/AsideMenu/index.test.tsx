import { screen } from "../../../test"
import { renderTheme } from "test/renderTheme";
import AsideMenu from "./index"


describe("AsideMenu", () => {
    it('should be render AsideMenu', () => {
        renderTheme(<AsideMenu />)

        const links = screen.getAllByRole('link')
        links.forEach(link => expect(link).toBeInTheDocument())
    })
});