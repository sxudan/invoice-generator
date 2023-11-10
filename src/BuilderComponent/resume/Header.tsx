import React, { useState } from "react";
import View from "../View";
import EditableInput from "../EditableInput";
import HStack from "../layout/HStack";
import AutoSizableEditableInput from "../AutoSizableEditableInput";

type HeaderProps = {
  pdfMode?: boolean;
  name?: string;
  designation?: string;
  onNameChange?: (title: string) => void;
  onDesignationChange?: (designation: string) => void;
};

const Header = ({ pdfMode, name, designation, onNameChange, onDesignationChange }: HeaderProps) => {
  return (
    <View>
      <View>
         <AutoSizableEditableInput value={name} onChange={onNameChange ?? undefined} className="fs-38" />
      </View>
      <View>
        <AutoSizableEditableInput value={designation} onChange={onDesignationChange ?? undefined} className="fs-20" />
      </View>
    </View>
  );
};

export default Header;
