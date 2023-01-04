import Text from "@/ui/Atoms/Text";

interface Props {
    title: string;
    area: string;
    text: string;
    techTags: string[];
    // mediaUrls
    // links
}

export const ProductItem = ({title, area, text, techTags}: Props) => {
    // TODO: add responsive transform
    return(
        <div className={"flex flex-row"}>
            <div className={""}>

            </div>
            <div className={"flex flex-col"}>
                <Text kind={"h1"}>{title}</Text>
                <Text kind={"h2"}>{area}</Text>
                <Text kind={"default"}>{text}</Text>
            </div>
        </div>
    )
}
