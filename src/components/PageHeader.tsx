import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, image }) => {
  return (
    <div className="relative bg-blood-600 text-white scroll-mt-16" id="page-header">
      {image && (
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        {description && <p className="text-lg max-w-3xl">{description}</p>}
      </div>
    </div>
  );
};

export default PageHeader;