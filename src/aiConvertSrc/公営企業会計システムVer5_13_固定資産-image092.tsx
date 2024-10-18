import React from 'react';
import styled from '@emotion/styled';

type MapProps = {
  // マップの中心座標
  center: {
    lat: number;
    lng: number;
  };
  // ズームレベル
  zoom: number;
  // マップ上のマーカー情報
  markers?: {
    position: {
      lat: number;
      lng: number;
    };
    label?: string;
  }[];
};

const MapContainer = styled.div`
  width: 100%;
  height: 400px;

  @media (max-width: 600px) {
    height: 300px;
  }
`;

const Map: React.FC<MapProps> = ({ center, zoom, markers = [] }) => {
  return (
    <MapContainer>
      {/* TODO: マップライブラリ（Google Maps API等）を使ってマップを表示 */}
      {/* 中心座標とズームレベルを設定 */}
      {/* マーカーを追加 */}
      {markers.map((marker, index) => (
        <React.Fragment key={index}>
          {/* TODO: マップ上にマーカーを表示 */}
          {marker.label && <div>{/* TODO: マーカーにラベルを表示 */}</div>}
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

// サンプルデータを使用した表示例
const MapExample: React.FC = () => {
  const center = {
    lat: 35.68944,
    lng: 139.69167,
  };

  const markers = [
    {
      position: {
        lat: 35.68944,
        lng: 139.69167,
      },
      label: '東京駅',
    },
    {
      position: {
        lat: 35.63097,
        lng: 139.77436,
      },
      label: '浜離宮恩賜公園',
    },
  ];

  return (
    <div>
      <h1>Map Component Example</h1>
      <Map center={center} zoom={12} markers={markers} />
    </div>
  );
};

export default Map;