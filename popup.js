document.getElementById('formatJson').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    try {
      const formatted = JSON.stringify(JSON.parse(input), null, 2);
      document.getElementById('input').value = formatted;
      alert('JSON formatted successfully.');
    } catch (e) {
      alert('Invalid JSON.');
    }
  });
  
  document.getElementById('validateJson').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    try {
      JSON.parse(input);
      alert('Valid JSON.');
    } catch (e) {
      alert('Invalid JSON.');
    }
  });
  
  document.getElementById('formatXml').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(input, "application/xml");
      const serializer = new XMLSerializer();
      const formatted = serializer.serializeToString(xmlDoc);
      document.getElementById('input').value = formatted;
      alert('XML formatted successfully.');
    } catch (e) {
      alert('Invalid XML.');
    }
  });
  
  document.getElementById('validateXml').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(input, "application/xml");
      if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
        throw new Error('Invalid XML.');
      }
      alert('Valid XML.');
    } catch (e) {
      alert('Invalid XML.');
    }
  });
  