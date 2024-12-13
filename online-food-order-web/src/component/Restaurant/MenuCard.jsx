import { Accordion, AccordionDetails, AccordionSummary, Button, FormControlLabel, FormGroup, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import React from 'react'


const ingredients = [
    {
        category: "Nut & seeds",
        ingredients: ["Cashews"]
    },
    {
        category: "Protein",
        ingredients: ["Protein", "Bacon strips"]
    }
]
export const MenuCard = () => {
    const handleCheckBoxChange = (value) => {
        console.log(value)
    }
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className='lg:flex items-center justify-between'>
                        <div className='lg:flex items-center lg:gap-5'>
                            <img className='w-[7rem] h-[7rem] object-cover' src="https://cdn.pixabay.com/photo/2024/08/29/02/50/cheeseburger-9005498_1280.png" alt="" />
                            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                                <p className='font-semibold text-xl'>Burger</p>
                                <p>$10</p>
                                <p className='text-gray-400'>Nice food</p>
                            </div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <form action="">
                        <div className='flex gap-5 flex-wrap'>
                            {
                                ingredients.map((item) =>
                                    <div>
                                        <p>{item.category}</p>
                                        <FormGroup>
                                            {item.ingredients.map((item) =>
                                                <FormControlLabel control={<Checkbox defaultChecked />} onChange={() => handleCheckBoxChange(item)} label={item} />)}
                                        </FormGroup>
                                    </div>
                                )
                            }
                        </div>
                        <div className='pt-5'>
                            <Button variant="contained" disabled={false} type="submit">
                                {true ? "Add to cart" : "Out Of Stock"}
                            </Button>
                        </div>
                    </form>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
