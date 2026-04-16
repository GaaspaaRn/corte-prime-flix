import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const whatsappNumber = "5547988984877";
  const whatsappMessage = "Olá, gostaria de saber mais sobre a barbearia.";

  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsApp}
        className="w-[60px] h-[60px] rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-105 transition-all duration-300 flex items-center justify-center p-0 animate-fade-in-up"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-9 h-9 fill-white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.312l6.156-1.952C9.77 31.076 12.764 32 16.004 32 24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.338 22.594c-.39 1.092-1.924 1.998-3.142 2.264-.834.178-1.924.32-5.594-1.202-4.692-1.944-7.708-6.728-7.942-7.04-.226-.312-1.89-2.52-1.89-4.808s1.196-3.41 1.62-3.876c.39-.43.852-.538 1.136-.538.282 0 .566.002.812.016.262.012.614-.1.96.732.356.852 1.208 2.944 1.314 3.158.108.214.178.464.036.748-.142.29-.214.468-.428.72-.214.25-.45.558-.642.748-.214.214-.436.446-.188.876.25.43 1.108 1.828 2.38 2.962 1.634 1.458 3.012 1.91 3.44 2.124.428.214.678.178.928-.108.25-.286 1.072-1.25 1.358-1.68.286-.43.572-.356.962-.214.39.142 2.478 1.168 2.904 1.382.428.214.712.322.82.498.106.178.106 1.024-.284 2.116z"/>
        </svg>
      </Button>
    </div>
  );
};

export default FloatingButtons;