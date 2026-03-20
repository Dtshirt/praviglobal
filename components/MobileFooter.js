'use client';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { hospitalInfo } from '@/lib/data';

export default function MobileFooter() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=+918009150040&text=Hello%21+I+would+like+to+know+more+about+your+services.&type=phone_number&app_absent=0";

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-[100] animate-slide-up">
      <div className="bg-white/95 backdrop-blur-md border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.15)] rounded-full p-2 flex justify-between items-center gap-2">
        <a
          href={`tel:${hospitalInfo.phone}`}
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full py-2.5 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[11px] font-bold tracking-wide">Call</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-green-50 hover:bg-green-100 text-green-600 rounded-full py-2.5 transition-colors"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-[11px] font-bold tracking-wide">WhatsApp</span>
        </a>
        <a
          href={`mailto:${hospitalInfo.email}`}
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-red-50 hover:bg-red-100 text-red-600 rounded-full py-2.5 transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span className="text-[11px] font-bold tracking-wide">Mail</span>
        </a>
      </div>
    </div>
  );
}
