import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const whatsappNumber = "5547988984877";
  const whatsappMessage = "Olá, gostaria de saber mais sobre a barbearia.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}&utm_source=site&utm_medium=floating_button&utm_campaign=floating_button&utm_content=whatsapp_flutuante`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        className="w-[60px] h-[60px] rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center p-0 animate-fade-in-up"
        aria-label="Falar no WhatsApp"
        asChild
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof (window as any).gtag !== 'undefined') {
              (window as any).gtag('event', 'click_whatsapp', { location: 'floating_button' });
            }
          }}
          className="flex items-center justify-center w-full h-full"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
            <path d="M12.031 2c-5.514 0-9.99 4.477-9.99 9.99 0 2.008.593 3.878 1.613 5.455L2 22l4.71-1.53c1.517.962 3.303 1.514 5.216 1.514 5.514 0 10-4.48 10-10 0-5.513-4.486-9.99-10-9.99zm6.09 13.568c-.29.815-1.468 1.488-2.316 1.67-.624.135-1.439.243-4.185-.896-3.508-1.455-5.756-5.022-5.932-5.254-.176-.232-1.41-1.876-1.41-3.582 0-1.706.896-2.54 1.216-2.88.32-.34.704-.424.96-.424.256 0 .512.008.736.016.23.008.528-.088.824.624.296.712 1.008 2.456 1.1 2.648.096.192.16.416.032.672-.128.256-.192.416-.384.64-.192.224-.4.496-.576.664-.192.184-.392.384-.168.768.224.384.992 1.632 2.128 2.648 1.464 1.304 2.7 1.712 3.08 1.904.38.192.608.16.832-.096.224-.256.96-1.12 1.216-1.504.256-.384.512-.32.864-.192.352.128 2.224 1.048 2.608 1.24.384.192.64.288.736.448.096.16.096.92-.192 1.736z"/>
          </svg>
        </a>
      </Button>
    </div>
  );
};

export default FloatingButtons;