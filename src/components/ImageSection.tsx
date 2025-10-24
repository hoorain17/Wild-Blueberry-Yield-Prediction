import { Card } from "@/components/ui/card";

interface ImageSectionProps {
  image: string;
  alt: string;
  caption?: string;
  className?: string;
}

export const ImageSection = ({ image, alt, caption, className }: ImageSectionProps) => {
  return (
    <Card className={`overflow-hidden ${className || ""}`}>
      <img 
        src={image} 
        alt={alt}
        className="w-full h-auto object-cover"
      />
      {caption && (
        <div className="p-4 bg-muted/50">
          <p className="text-sm text-muted-foreground text-center italic">
            {caption}
          </p>
        </div>
      )}
    </Card>
  );
};
