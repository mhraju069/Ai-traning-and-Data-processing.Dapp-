import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Redirector({ path }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (path) {
      navigate(path);
    }
  }, [path, navigate]);

  return null; // no UI needed
}

