import { screen } from "../../test"
import { renderTheme } from "src/test/renderTheme";
import Card from "./index";
import { Props } from "./interface";

const mock: Props = {
    title: "Button",
    buttonTitle: "Butao",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium consectetur, porro nostrum obcaecati deserunt reiciendis commodi necessitatibus molestias, esse pariatur! Molestias porro ex dolorum amet cumque, quo laborum quibusdam.",
    image: "https://via.placeholder.com/150"
}


describe("Card", () => {
    it('should be render Card', async () => {
        renderTheme(<Card {...mock} />)
        
        const image = screen.getByAltText("Card Image")
        expect(image).toHaveAttribute('src', mock.image)

        expect(screen.getByRole('heading')).toBeInTheDocument()
        expect(screen.getByRole('heading')).toHaveTextContent(mock.title)

        expect(screen.getByRole('paragraph')).toBeInTheDocument()
        expect(screen.getByRole('paragraph')).toHaveTextContent(mock.description)

        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByRole('button')).toHaveTextContent(mock.buttonTitle)
    })
});