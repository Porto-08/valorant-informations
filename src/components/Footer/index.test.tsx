import { screen } from "../../test"
import { renderTheme } from "src/test/renderTheme";
import Footer from "."


describe("Footer", () => {
    it('should be render Footer', () => {
        renderTheme(<Footer />)

        const paragraph = screen.getAllByRole('paragraph');
        paragraph.forEach(p => expect(p).toBeInTheDocument());

        expect(paragraph.length).toBe(2);

        expect(screen.getByRole('link')).toBeInTheDocument();
    })
});