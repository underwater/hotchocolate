using System;
using HotChocolate.Types.Descriptors;

#nullable enable

namespace HotChocolate.Types
{
    [AttributeUsage(
        AttributeTargets.Class | AttributeTargets.Interface,
        Inherited = true,
        AllowMultiple = false)]
    public sealed class InputUnionTypeAttribute
        : InputUnionTypeDescriptorAttribute
    {
        public string? Name { get; set; }

        public override void OnConfigure(
            IDescriptorContext context,
            IInputUnionTypeDescriptor descriptor,
            Type type)
        {
            if (!string.IsNullOrEmpty(Name))
            {
                descriptor.Name(Name);
            }
        }
    }

}
