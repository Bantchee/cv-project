import { Button } from "./Button"
import { Input } from "./Input"

export const Career = (props) => {
    return (
        <div className="flex flex-col gap-2">
            <Input
                onChange={(e) => props.onChange(e, 0)}
                type="text"
                name="company"
                placeholder="Company"
            />
            <Input
                onChange={(e) => this.props.onChange(e)}
                type="text"
                name="position"
                placeholder="Position"
            />
            <Input
                onChange={(e) => this.props.onChange(e)}
                type="text"
                name="cityState"
                placeholder="City, State"
            />
            <Input
                onChange={(e) => this.props.onChange(e)}
                type="text"
                name="from"
                placeholder="From"
            />
            <Input
                onChange={(e) => this.props.onChange(e)}
                type="text"
                name="to"
                placeholder="To"
            />
            <Button 
                className="bg-red-500 rounded-md"
                value="Delete"
            />
        </div>
    )
}