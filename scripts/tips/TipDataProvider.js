const tipsData = [

        {tipem: "Feed your fish daily"},
        {tipem: "Talk to fish before leaving for the day"},
        {tipem: "Get your fish a friend"},
        {tipem: "Fish do not eat fish sticks"}

]

export const useTips = () => {
    return tipsData.slice()
}