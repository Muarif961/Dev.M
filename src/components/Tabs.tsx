import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import TechStack from "@/Data/TechStacks"; // Adjust path as needed

export default function TabsSection() {
    const [subCategory, setSubCategory] = useState("Frameworks");

   
    const filteredTechStack = TechStack.filter(
        (item) => item.SubCategory === "Frameworks" || item.SubCategory === "Databases"
    );

    return (
        <Tabs defaultValue={subCategory} className="w-full mt-15">
            
            <TabsList className="grid w-full grid-cols-2">
                {filteredTechStack.map((item) => (
                    <TabsTrigger key={item.SubCategory} onClick={() => setSubCategory(item.SubCategory)} value={item.SubCategory}>
                        {item.SubCategory}
                    </TabsTrigger>
                ))}
            </TabsList>

            {/* Tab Content */}
            {filteredTechStack.map((item) => (
                <TabsContent key={item.SubCategory} value={item.SubCategory}>
                    <Card>
                        <CardTitle>
                            <CardDescription>
                                Stacks I go with for <br /> {item.category}
                            </CardDescription>
                        </CardTitle>

                       
                        {item.technologies.map((tech, index) => (
                            <CardContent key={index} className="space-y-2 flex flex-col">
                                <Button className="">
                                    <img className="h-5" src={tech.image} alt={tech.title} />
                                    <div>{tech.title}</div>
                                </Button>
                            </CardContent>
                        ))}

                        <CardFooter />
                    </Card>
                </TabsContent>
            ))}
        </Tabs>
    );
}
