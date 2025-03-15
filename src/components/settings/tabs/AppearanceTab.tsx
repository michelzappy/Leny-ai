
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Globe, MonitorSmartphone } from "lucide-react";

const AppearanceTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance Settings</CardTitle>
        <CardDescription>
          Customize how the application looks
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Theme</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center space-y-2">
              <Button variant="outline" className="w-full h-24 border-2 border-primary">
                <div className="w-full h-full bg-background flex flex-col">
                  <div className="h-1/3 w-full bg-primary"></div>
                  <div className="flex-grow flex items-center justify-center text-xs">
                    Light
                  </div>
                </div>
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Button variant="outline" className="w-full h-24">
                <div className="w-full h-full bg-slate-900 flex flex-col">
                  <div className="h-1/3 w-full bg-primary"></div>
                  <div className="flex-grow flex items-center justify-center text-xs text-white">
                    Dark
                  </div>
                </div>
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Button variant="outline" className="w-full h-24">
                <div className="w-full h-full bg-background flex flex-col">
                  <div className="h-1/3 w-full bg-primary"></div>
                  <div className="flex-grow flex items-center justify-center text-xs">
                    <MonitorSmartphone className="h-4 w-4 mr-1" />
                    System
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Density</h3>
          <div className="grid grid-cols-3 gap-4">
            <Button variant="outline">Compact</Button>
            <Button variant="outline" className="border-2 border-primary">Comfortable</Button>
            <Button variant="outline">Spacious</Button>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Language</h3>
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <select className="flex h-10 w-full max-w-xs rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option value="en-US">English (US)</option>
              <option value="en-GB">English (UK)</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
            </select>
          </div>
        </div>
        
        <Button>Save Appearance Settings</Button>
      </CardContent>
    </Card>
  );
};

export default AppearanceTab;
