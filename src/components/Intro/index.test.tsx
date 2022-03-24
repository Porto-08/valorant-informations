import { screen } from "../../../test"
import { renderTheme } from "test/renderTheme";
import Intro from "./index"
import { Props } from "./interface";


const mock: Props = {
    title: "Title",
    subtitle: "Subtitle",
}

describe("Intro", () => {
    it('should be render Intro', () => {
        renderTheme(<Intro {...mock}/>)

        expect(screen.getByRole('heading')).toBeInTheDocument()
        expect(screen.getByRole('heading')).toHaveTextContent(mock.title)
        
        expect(screen.getByText(mock.subtitle)).toHaveTextContent(mock.subtitle)
    })
});