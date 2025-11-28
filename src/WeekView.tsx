export type TypeA = {
    text: string
    id: string
}

export type WeekViewItemProps = {
    typeAs: TypeA[]
    dayName: string
    dayOfDate: string
}

export type WeekViewProps = {
    from: string,
    to: string,
}

function WeekViewItem({typeAs, dayOfDate, dayName}: WeekViewItemProps) {
    return (
        <>
            <div className="col-start-1 col-end-2 px-2 py-1 m-1">
                <div className="rounded-xl bg-white border-black border p-2 w-16 h-16">
                    <span className="mx-auto block mb-0 text-lg font-semibold">{dayName.substring(0, 2)}.</span>
                    <span
                        className="mx-auto block mt-[-2px] font-semibold text-gray-700 mb-2 text-xs">{dayOfDate}.</span>
                </div>
            </div>
            {typeAs.map(({id, text}) => <div
                className="col-span-1 px-3 py-1 text-left bg-white mr-2 rounded-xl min-h-12 h-auto flex flex-col justify-center" key={id}>
                <span className="block">{text}</span>
            </div>)}
        </>)
}

export function WeekView() {
    return (
        <div
            className="bg-gray-300 grid grid-cols-[repeat(4,_max-content)] gap-[1px] auto-rows-fr items-center justify-items-start min-h-[300px] min-w-[300px] pr-4 pl-1 py-2">
            <WeekViewItem typeAs={[{id: '1', text: 'Schießstand'}, {id: '2', text: 'Homeoffice'}]} dayName="Montag"
                          dayOfDate="01"/>
            <WeekViewItem typeAs={[{id: '3', text: 'Sport'}, {id: '4', text: 'Office'}, {
                id: '14',
                text: 'Zahnarzttermin vereinbaren'
            }]} dayName="Dienstag" dayOfDate="02"/>
            <WeekViewItem typeAs={[{id: '5', text: 'Fotos K3'}, {id: '6', text: 'Homeoffice'}]} dayName="Mittwoch"
                          dayOfDate="03"/>
            <WeekViewItem typeAs={[{id: '7', text: 'Weihnachtsfeier'}, {id: '8', text: 'Office'}]} dayName="Donnerstag"
                          dayOfDate="04"/>
            <WeekViewItem typeAs={[{id: '9', text: 'Hemden bügeln'}, {id: '10', text: 'Office'}]} dayName="Freitag"
                          dayOfDate="05"/>
            <WeekViewItem typeAs={[{id: '11', text: 'Kreisversammlung'}]} dayName="Samstag" dayOfDate="06"/>
            <WeekViewItem typeAs={[{id: '13', text: 'Sport'},]} dayName="Sonntag" dayOfDate="07"/>
        </div>)
}