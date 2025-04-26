import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function ProfilePage() {
  // Demo user data - in a real app, this would come from a database
  const user = {
    name: "Demo User",
    email: "demo@medprep.com",
    bio: "Medical student passionate about pediatrics and emergency medicine.",
    university: "Medical University of Example",
    year: "3rd year",
    specialization: "General Medicine"
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Profile</h1>
      </div>

      <div className="space-y-6">
        <Card hover={false}>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your personal details here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue={user.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue={user.email} disabled />
                <p className="text-sm text-muted-foreground">Your email cannot be changed</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" rows={4} defaultValue={user.bio} />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>

        <Card hover={false}>
          <CardHeader>
            <CardTitle>Academic Information</CardTitle>
            <CardDescription>
              Information about your academic profile.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="university">University</Label>
                <Input id="university" defaultValue={user.university} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year of Study</Label>
                <Input id="year" defaultValue={user.year} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialization">Specialization</Label>
              <Input id="specialization" defaultValue={user.specialization} />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Update Academic Info</Button>
          </CardFooter>
        </Card>

        <Card hover={false}>
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
            <CardDescription>
              Upload a profile picture to personalize your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center text-xl font-semibold">
                {user.name.split(" ").map(name => name[0]).join("")}
              </div>
              <Button>Upload New Picture</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 