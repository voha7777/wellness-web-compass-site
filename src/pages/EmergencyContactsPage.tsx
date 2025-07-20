import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, AlertTriangle, Plus, Edit, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EmergencyContactsPage = () => {
  const [personalContacts, setPersonalContacts] = useState([
    { id: 1, name: "Dr. Sarah Johnson", relation: "Primary Care Physician", phone: "(555) 123-4567", notes: "Office hours: M-F 9-5" },
    { id: 2, name: "John Smith", relation: "Emergency Contact", phone: "(555) 987-6543", notes: "Lives nearby, has house key" },
  ]);

  const [newContact, setNewContact] = useState({
    name: "",
    relation: "",
    phone: "",
    notes: ""
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  const emergencyServices = [
    {
      service: "Emergency Services",
      number: "911",
      description: "Fire, Police, Medical Emergencies",
      availability: "24/7"
    },
    {
      service: "Poison Control",
      number: "1-800-222-1222",
      description: "Poisoning emergencies and information",
      availability: "24/7"
    },
    {
      service: "National Suicide Prevention Lifeline",
      number: "988",
      description: "Mental health crisis support",
      availability: "24/7"
    },
    {
      service: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Text-based crisis counseling",
      availability: "24/7"
    },
  ];

  const medicalHotlines = [
    {
      service: "Nurse Hotline",
      number: "Call your insurance provider",
      description: "24/7 medical advice from registered nurses",
      availability: "24/7"
    },
    {
      service: "Veterans Crisis Line",
      number: "1-800-273-8255",
      description: "Support for veterans in crisis",
      availability: "24/7"
    },
    {
      service: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Substance abuse and mental health information",
      availability: "24/7"
    },
    {
      service: "Child Abuse Hotline",
      number: "1-800-4-A-CHILD (1-800-422-4453)",
      description: "Report child abuse and neglect",
      availability: "24/7"
    },
  ];

  const addContact = () => {
    if (newContact.name && newContact.relation && newContact.phone) {
      const contact = {
        id: Date.now(),
        ...newContact
      };
      setPersonalContacts([...personalContacts, contact]);
      setNewContact({ name: "", relation: "", phone: "", notes: "" });
    }
  };

  const deleteContact = (id: number) => {
    setPersonalContacts(personalContacts.filter(contact => contact.id !== id));
  };

  const startEditing = (contact: any) => {
    setEditingId(contact.id);
    setNewContact(contact);
  };

  const saveEdit = () => {
    setPersonalContacts(personalContacts.map(contact => 
      contact.id === editingId ? { ...newContact, id: editingId } : contact
    ));
    setEditingId(null);
    setNewContact({ name: "", relation: "", phone: "", notes: "" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setNewContact({ name: "", relation: "", phone: "", notes: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Phone className="w-16 h-16 mx-auto text-primary mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Emergency Contacts</h1>
            <p className="text-xl text-muted-foreground">
              Keep important emergency and medical contacts easily accessible
            </p>
          </div>

          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              In a true emergency, always call 911 first. Keep this page bookmarked or print it for quick access.
              Make sure family members know where to find this information.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-red-500" />
                  Emergency Services
                </CardTitle>
                <CardDescription>Critical emergency numbers - available 24/7</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {emergencyServices.map((service, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4 py-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{service.service}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{service.description}</p>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-3 h-3 text-green-600" />
                          <span className="text-xs text-green-600">{service.availability}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <a 
                          href={`tel:${service.number.replace(/\D/g, '')}`}
                          className="text-lg font-bold text-red-600 hover:text-red-700"
                        >
                          {service.number}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-blue-500" />
                  Medical Hotlines
                </CardTitle>
                <CardDescription>Specialized medical and crisis support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {medicalHotlines.map((service, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{service.service}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{service.description}</p>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-3 h-3 text-green-600" />
                          <span className="text-xs text-green-600">{service.availability}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-blue-600">
                          {service.number}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Personal Emergency Contacts</CardTitle>
              <CardDescription>Add your personal emergency contacts and healthcare providers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                {personalContacts.map((contact) => (
                  <div key={contact.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{contact.name}</h4>
                        <Badge variant="outline" className="mb-2">{contact.relation}</Badge>
                        <div className="flex items-center space-x-2 mb-1">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <a 
                            href={`tel:${contact.phone.replace(/\D/g, '')}`}
                            className="text-primary hover:underline"
                          >
                            {contact.phone}
                          </a>
                        </div>
                        {contact.notes && (
                          <p className="text-sm text-muted-foreground">{contact.notes}</p>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => startEditing(contact)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteContact(contact.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">
                  {editingId ? "Edit Contact" : "Add New Contact"}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Full name"
                      value={newContact.name}
                      onChange={(e) => setNewContact(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="relation">Relation/Title</Label>
                    <Input
                      id="relation"
                      placeholder="e.g., Doctor, Spouse, Friend"
                      value={newContact.relation}
                      onChange={(e) => setNewContact(prev => ({ ...prev, relation: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="(555) 123-4567"
                      value={newContact.phone}
                      onChange={(e) => setNewContact(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="notes">Notes (optional)</Label>
                    <Input
                      id="notes"
                      placeholder="Additional information"
                      value={newContact.notes}
                      onChange={(e) => setNewContact(prev => ({ ...prev, notes: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  {editingId ? (
                    <>
                      <Button onClick={saveEdit}>Save Changes</Button>
                      <Button variant="outline" onClick={cancelEdit}>Cancel</Button>
                    </>
                  ) : (
                    <Button onClick={addContact}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Contact
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Emergency Preparedness Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">Keep Information Updated</h4>
                  <p className="text-sm text-muted-foreground">Review and update contact information every 6 months</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Multiple Copies</h4>
                  <p className="text-sm text-muted-foreground">Keep copies in your wallet, car, and give to family members</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Medical Information</h4>
                  <p className="text-sm text-muted-foreground">Include allergies, medications, and medical conditions</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">ICE Contacts</h4>
                  <p className="text-sm text-muted-foreground">Add "ICE" (In Case of Emergency) contacts to your phone</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>When to Call Emergency Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">Medical Emergencies</h4>
                  <p className="text-sm text-muted-foreground">Chest pain, difficulty breathing, severe bleeding, unconsciousness</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Mental Health Crisis</h4>
                  <p className="text-sm text-muted-foreground">Thoughts of self-harm, severe psychological distress</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Safety Threats</h4>
                  <p className="text-sm text-muted-foreground">Violence, break-ins, immediate danger to yourself or others</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Fire or Accidents</h4>
                  <p className="text-sm text-muted-foreground">House fires, car accidents, gas leaks, electrical hazards</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmergencyContactsPage;