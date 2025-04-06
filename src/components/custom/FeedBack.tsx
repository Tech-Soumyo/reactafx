import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function ContactSection() {
  const socialLinks = {
    facebook: "https://facebook.com/your-page",
    twitter: "https://twitter.com/your-handle",
    linkedin: "https://linkedin.com/company/your-company",
    instagram: "https://instagram.com/your-profile",
  };
  return (
    <div className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 border-b pb-10 border-red-700">
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <div className="flex items-start gap-3">
            <MapPin className="text-purple-700 mt-1" />
            <p className="text-gray-700">
              98, Regent Place, Regent Park, Kolkata, India
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-purple-700" />
            <p className="text-gray-700">Call +011 91 33 2311 0556</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-purple-700" />
            <p className="text-gray-700">afxanimation@gmail.com</p>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Feedback</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <Input placeholder="Enter your name" className="flex-1 shadow-md" />
            <Input
              placeholder="Enter your email"
              className="flex-1 shadow-md"
            />
          </div>
          <Textarea
            placeholder="Enter your Feedback (max 250 characters)"
            className="resize-none shadow-md"
          />
          <div className="flex items-center gap-4 mt-2">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="w-6 h-6 text-black hover:text-red-700 cursor-pointer transition-colors" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-6 h-6 text-black hover:text-red-700 cursor-pointer transition-colors" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with us on LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-black hover:text-red-700 cursor-pointer transition-colors" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6 text-black hover:text-red-700 cursor-pointer transition-colors" />
            </a>
          </div>
          <Button className="bg-red-700 hover:bg-red-800 text-white w-32 rounded-md mt-4">
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  );
}
