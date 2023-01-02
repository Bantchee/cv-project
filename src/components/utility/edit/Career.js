import { Input } from "../Input"
import { TextArea } from "../TextArea"

export const Career = (props) => {
    return (
        <div 
            className="flex flex-col gap-2 dark:text-zinc-900"
        >
            <Input
                onChange={(e) => props.onChange(e)}
                type="text"
                name="company"
                placeholder="Company"
            />
            <Input
                onChange={(e) => props.onChange(e)}
                type="text"
                name="position"
                placeholder="Position"
            />
            <Input
                onChange={(e) => props.onChange(e)}
                type="text"
                name="city"
                placeholder="City"
            />
            <Input
                onChange={(e) => props.onChange(e)}
                type="text"
                name="state"
                placeholder="State"
            />
            <Input
                onChange={(e) => props.onChange(e)}
                type="text"
                name="from"
                placeholder="From"
            />
            <Input
                onChange={(e) => props.onChange(e)}
                type="text"
                name="to"
                placeholder="To"
            />
            <TextArea 
                onChange={(e) => props.onChange(e)}
                name="details"
                placeholder="Details"
            />
            <button 
                onClick={props.onClick}
                className="bg-red-500 rounded-md dark:text-zinc-50"
            >Delete</button>
        </div>
    )
}