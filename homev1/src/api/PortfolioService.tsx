import useSWR, {Fetcher} from 'swr'
import {Portfolio} from "../models/portfolio";
import {PosAligner} from "../utils/PosAligner";

interface PortfolioResponse {
    id: number;
    title: string;
    desc: string;
}

interface ConverterProps {
    portfoliosRes?: PortfolioResponse[]
}

const portfolioConverter = ({portfoliosRes}: ConverterProps): Portfolio[] | undefined => {
    if (!portfoliosRes) return;
    if (portfoliosRes.length > 9) {
        console.error("too many responses")
        portfoliosRes.splice(9)
    }
    return portfoliosRes.map((portfolioRes, index) => {
        const portfolio: Portfolio = {
            id: portfolioRes.id,
            title: portfolioRes.title,
            desc: portfolioRes.desc,
            pos: PosAligner(index, portfoliosRes.length),
            imgUri: process.env.BASE_URI + `/portfolio/${portfolioRes.id}`
        }
        return portfolio
    })
}

export const usePortfolio = ({id}: {id: string}) => {
    const fetcher: Fetcher<PortfolioResponse[], string> = (id) => fetch(`/portfolio/${id}`).then(res => res.json())
    const { data, error } = useSWR(id, fetcher)

    const portfolioData = portfolioConverter({portfoliosRes: data})

    return {portfolioData, error}
}
