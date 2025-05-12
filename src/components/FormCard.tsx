import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface FormCardProps {
  title: string;
  description: string;
  formLink: string;
  buttonText?: string;
  icon?: React.ReactNode;
}

const FormCard: React.FC<FormCardProps> = ({
  title,
  description,
  formLink,
  buttonText = 'ফর্ম খুলুন',
  icon,
}) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-start space-x-4">
        {icon && <div className="text-blood-600">{icon}</div>}
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="mt-2">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Button className="w-full mt-2" asChild>
          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            {buttonText} <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default FormCard;
