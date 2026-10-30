import React from 'react';
import { GsisCrest } from './GsisCrest';
import { IbMypLogo } from './IbMypLogo';
import { 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  ExternalLink,
  GraduationCap,
  Building
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150 my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <GsisCrest size={40} className="h-10 w-10 shrink-0" />
            <div>
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                Official School Contacts
              </span>
              <h3 id="contact-modal-title" className="text-lg font-bold text-[#0F224A]">
                GSIS MYP Academic Office
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-md hover:bg-slate-100 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-slate-900 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informational Content */}
        <div className="mt-5 space-y-5">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            For admissions inquiries, subject choices consultation, or detailed information regarding the 
            IB Middle Years Programme at Good Shepherd International School, our academic leadership team is available to assist your family.
          </p>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            
            {/* Email Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0F224A] uppercase tracking-wider">
                <Mail className="w-4 h-4 text-[#991B1B]" />
                <span>Email Coordination</span>
              </div>
              <div className="mt-3 space-y-1.5 text-xs">
                <div>
                  <span className="text-slate-500 block text-[11px]">Admissions & Inquiries:</span>
                  <a
                    href="mailto:admissions@gsis.ac.in"
                    className="font-semibold text-blue-900 hover:underline"
                  >
                    admissions@gsis.ac.in
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">MYP Academic Office:</span>
                  <a
                    href="mailto:mypcoordinator@gsis.ac.in"
                    className="font-semibold text-blue-900 hover:underline"
                  >
                    mypcoordinator@gsis.ac.in
                  </a>
                </div>
              </div>
            </div>

            {/* Telephone Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0F224A] uppercase tracking-wider">
                <Phone className="w-4 h-4 text-[#991B1B]" />
                <span>Telephone</span>
              </div>
              <div className="mt-3 space-y-1.5 text-xs">
                <div>
                  <span className="text-slate-500 block text-[11px]">Main Campus Switchboard:</span>
                  <a
                    href="tel:+914232550371"
                    className="font-semibold text-blue-900 hover:underline"
                  >
                    +91 (423) 2550 371
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Secondary Line:</span>
                  <a
                    href="tel:+914232550071"
                    className="font-semibold text-blue-900 hover:underline"
                  >
                    +91 (423) 2550 071
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0F224A] uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#991B1B]" />
                <span>Academic Office Hours</span>
              </div>
              <div className="mt-3 space-y-1 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Mon – Fri:</span>
                  <span className="font-medium">8:30 AM – 4:30 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Saturday:</span>
                  <span className="font-medium">9:00 AM – 1:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Sunday:</span>
                  <span className="text-slate-400">Closed</span>
                </div>
              </div>
            </div>

            {/* Campus Location */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0F224A] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#991B1B]" />
                <span>Campus Location</span>
              </div>
              <div className="mt-3 text-xs text-slate-600 leading-snug">
                <strong className="text-slate-900 font-semibold block">Good Shepherd Knowledge Village</strong>
                Palada P.O., Ootacamund (Ooty), The Nilgiris, Tamil Nadu - 643004, India.
              </div>
            </div>

          </div>

          {/* School Visit & Consultation Guidance */}
          <div className="p-3.5 bg-blue-50/80 border border-blue-200/80 rounded-xl text-xs text-blue-950 leading-relaxed">
            <div className="font-bold text-blue-900 mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-800" />
              <span>Campus Visits & Consultations</span>
            </div>
            Families wishing to schedule a guided tour of our academic facilities, specialized science laboratories, design studios, or boarding houses are invited to contact the Admissions Office in advance.
          </div>

          {/* Direct Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href="mailto:admissions@gsis.ac.in?subject=GSIS%20MYP%20Academic%20Inquiry"
              className="px-4 py-2 bg-[#0F224A] hover:bg-[#1B3A70] text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Send Direct Email</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
